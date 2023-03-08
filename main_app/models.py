from django.db import models


class Student(models.Model):
    GENDER_CHOICE = (
        ('m', 'male'),
        ('f', 'female'),
    )
    last_name = models.CharField(max_length=100)    # Nom
    first_name = models.CharField(max_length=100, null=True)   # Prénom
    birth_date = models.DateField(null=False)       # Date de naissance
    gender = models.CharField(max_length=1,
                              choices=GENDER_CHOICE,
                              null=True, blank=True)
    course_id = models.CharField(max_length=4, null=False)

    def __str__(self):
        return self.name


class Subject(models.Model):
    subject_id = models.CharField(max_length=8, primary_key=True)
    course_id = models.IntegerField
    instructor_id = models.IntegerField
    name = models.CharField(max_length=50)


class Instructor(models.Model):
    last_name = models.CharField(max_length=100)  # Nom
    first_name = models.CharField(max_length=100, null=True)  # Prénom


class Grade(models.Model):
    student_id = models.IntegerField
    subject_id = models.IntegerField
    grade = models.FloatField


class Course(models.Model):
    id = models.CharField(max_length=4, primary_key=True)
    name = models.CharField(max_length=30)
