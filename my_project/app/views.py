from django.shortcuts import render
from .forms import UserInfoForm

# Create your views here.
def home(request):
    return render(request, 'app/home.html')

def thanks(request):
    return render(request, 'app/thanks.html')

def deep(request):
    return render(request, 'app/deepLearning.html')


def index(request):

    form = UserInfoForm()
    
    if request.method == "POST":
        form = UserInfoForm(request.POST)
        if form.is_valid():
            form.save()
            return thanks(request)

    return render(request, 'app/contact.html', {'form':form})