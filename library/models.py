from django.db import models
from django.contrib.auth.models import User
from datetime import datetime, timedelta
from django.core.mail import send_mail


class StudentExtra(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    enrollment = models.CharField(max_length=40)
    branch = models.CharField(max_length=40)
    is_ihec = models.BooleanField(default=False)

    def __str__(self):
        return self.user.first_name + " [" + str(self.enrollment) + "]"

    @property
    def get_name(self):
        return self.user.first_name

    @property
    def getuserid(self):
        return self.user.id


class Librarian(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(
        max_length=15, null=True, blank=True
    )  # Optional additional details

    def __str__(self):
        return self.user.first_name


class Book(models.Model):
    catchoice = [
        ("education", "Education"),
        ("entertainment", "Entertainment"),
        ("comics", "Comics"),
        ("biography", "Biography"),
        ("history", "History"),
    ]
    name = models.CharField(max_length=30)
    isbn = models.PositiveIntegerField()
    author = models.CharField(max_length=40)
    category = models.CharField(max_length=30, choices=catchoice, default="education")

    def __str__(self):
        return str(self.name) + " [" + str(self.isbn) + "]"


def get_expiry():
    return datetime.today() + timedelta(days=15)


class IssuedBook(models.Model):
    enrollment = models.CharField(max_length=30)
    isbn = models.CharField(max_length=30)
    issuedate = models.DateField(auto_now=True)
    expirydate = models.DateField(default=get_expiry)

    def __str__(self):
        return self.enrollment


# New Model for Notifications
class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"Notification for {self.user.username}: {self.message[:50]}"
