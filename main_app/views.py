from django.shortcuts import render


# View: index page
def homepage(request):
    context = {}
    return render(request, 'accueil.html', context)


def student(request):
    return render(request, 'etudiant.html', {})


def student_detail(request):
    return render(request, 'detail_etudiant.html', {})
