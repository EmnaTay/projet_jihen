from django import forms
from django.contrib.auth.models import User
from . import models


class ContactusForm(forms.Form):
    Name = forms.CharField(max_length=30)
    Email = forms.EmailField()
    Message = forms.CharField(
        max_length=500, widget=forms.Textarea(attrs={"rows": 3, "cols": 30})
    )


class AdminSignupForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "username", "password"]


class StudentUserForm(forms.ModelForm):
    email = forms.EmailField(required=True)  # Add email validation

    class Meta:
        model = User
        fields = ["first_name", "last_name", "username", "password", "email"]

    def clean_email(self):
        email = self.cleaned_data.get("email")
        if "@ucar.ihec" in email:
            self.cleaned_data["is_ihec"] = True
        else:
            self.cleaned_data["is_ihec"] = False
        return email


class StudentExtraForm(forms.ModelForm):
    class Meta:
        model = models.StudentExtra
        fields = ["enrollment", "branch"]


class LibrarianSignupForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "username", "password"]


class BookForm(forms.ModelForm):
    class Meta:
        model = models.Book
        fields = ["name", "isbn", "author", "category"]


class IssuedBookForm(forms.Form):
    # to_field_name value will be stored when form is submitted
    isbn2 = forms.ModelChoiceField(
        queryset=models.Book.objects.all(),
        empty_label="Name and ISBN",
        to_field_name="isbn",
        label="Name and ISBN",
    )
    enrollment2 = forms.ModelChoiceField(
        queryset=models.StudentExtra.objects.all(),
        empty_label="Name and Enrollment",
        to_field_name="enrollment",
        label="Name and Enrollment",
    )
