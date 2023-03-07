from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('student', views.student, name='student'),
    path('student_detail', views.student_detail, name='student_detail'),
]