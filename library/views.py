from django.http import JsonResponse, HttpResponseRedirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required, user_passes_test
from django.core.mail import send_mail
from django.shortcuts import render
from django.contrib.auth.models import Group
from . import models, forms


# library/views.py
def sample_data(request):
    # Example logic
    return HttpResponse("Sample data response")


# React's entry point
def home_view(request):
    return render(request, "library/index.html")


# User group checks
def is_admin(user):
    return user.groups.filter(name="ADMIN").exists()


def is_librarian(user):
    return user.groups.filter(name="LIBRARIAN").exists()


def is_student(user):
    return user.groups.filter(name="STUDENT").exists()


def is_ihec_student(user):
    return user.groups.filter(name="IHEC_STUDENT").exists()


# Librarian signup view
def librariansignup_view(request):
    form = forms.LibrarianSignupForm()
    if request.method == "POST":
        form = forms.LibrarianSignupForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.set_password(user.password)
            user.save()

            librarian_group = Group.objects.get_or_create(name="LIBRARIAN")[0]
            librarian_group.user_set.add(user)

            return HttpResponseRedirect("librarianlogin")
    return render(request, "library/librariansignup.html", {"form": form})


# Student signup view with IHEC email differentiation
def studentsignup_view(request):
    form1 = forms.StudentUserForm()
    form2 = forms.StudentExtraForm()
    if request.method == "POST":
        form1 = forms.StudentUserForm(request.POST)
        form2 = forms.StudentExtraForm(request.POST)
        if form1.is_valid() and form2.is_valid():
            user = form1.save()
            user.set_password(user.password)
            user.save()

            student_extra = form2.save(commit=False)
            student_extra.user = user
            student_extra.save()

            # Assign appropriate group based on email
            group_name = (
                "IHEC_STUDENT" if user.email.endswith("@ucar.ihec") else "STUDENT"
            )
            group = Group.objects.get_or_create(name=group_name)[0]
            group.user_set.add(user)

            return HttpResponseRedirect("studentlogin")
    return render(
        request, "library/studentsignup.html", {"form1": form1, "form2": form2}
    )


# Post-login redirection based on user role
def afterlogin_view(request):
    if is_admin(request.user):
        return render(request, "library/adminafterlogin.html")
    elif is_librarian(request.user):
        return render(request, "library/librarian_dashboard.html")
    elif is_ihec_student(request.user):
        return render(request, "library/ihec_student_dashboard.html")
    elif is_student(request.user):
        return render(request, "library/studentafterlogin.html")
    return HttpResponseRedirect("login")


# Librarian dashboard view
@login_required(login_url="librarianlogin")
@user_passes_test(is_librarian)
def librarian_dashboard_view(request):
    issued_books = models.IssuedBook.objects.all()
    response_data = [
        {
            "student_enrollment": book.enrollment,
            "book_isbn": book.isbn,
            "issue_date": book.issuedate.strftime("%Y-%m-%d"),
            "expiry_date": book.expirydate.strftime("%Y-%m-%d"),
        }
        for book in issued_books
    ]
    return JsonResponse({"requests": response_data})


# Notify librarians of book requests
@api_view(["POST"])
def notify_librarian_on_book_request(request):
    enrollment = request.data.get("enrollment")
    isbn = request.data.get("isbn")

    # Fetch all librarians and notify via email
    librarians = Group.objects.get(name="LIBRARIAN").user_set.all()
    email_list = [librarian.email for librarian in librarians if librarian.email]

    send_mail(
        subject="New Book Request",
        message=f"Student {enrollment} has requested the book with ISBN {isbn}.",
        from_email="library@admin.com",
        recipient_list=email_list,
        fail_silently=False,
    )
    return Response({"message": "Notification sent to librarians."})


def student_dashboard(request):
    # Assuming 'user' is the logged-in student
    is_ihec_student = (
        request.user.is_ihec_student
    )  # Example, this should be a boolean flag from your database

    return render(
        request,
        "student_dashboard.html",
        {"is_ihec_student": is_ihec_student, "user": request.user},
    )


def adminclick_view(request):
    # Your logic for the admin click view
    return render(request, "library/adminclick.html")


def studentclick_view(request):
    # Your logic for the admin click view
    return render(request, "library/studentclick.html")


def adminsignup_view(request):
    # Your logic for the admin click view
    return render(request, "library/adminsignup.html")


def addbook_view(request):
    # Your logic for the admin click view
    return render(request, "library/addbook.html")


def viewbook_view(request):
    # Your logic for the admin click view
    return render(request, "library/viewbook.html")


def issuebook_view(request):
    # Your logic for the admin click view
    return render(request, "library/issuebook.html")


def viewissuedbook_view(request):
    # Your logic for the admin click view
    return render(request, "library/viewissuedbook.html")


def viewstudent_view(request):
    # Your logic for the admin click view
    return render(request, "library/viewstudent.html")


def viewissuedbookbystudent(request):
    # Your logic for the admin click view
    return render(request, "library/bookissued.html")


def aboutus_view(request):
    # Your logic for the admin click view
    return render(request, "library/aboutus.html")


def contactus_view(request):
    # Your logic for the admin click view
    return render(request, "library/contactus.html")
