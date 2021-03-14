from django import forms
from app.models import UserInfo

class UserInfoForm(forms.ModelForm):

    class Meta:
        model = UserInfo
        fields = '__all__'

        widgets = {
            'first_name': forms.TextInput(attrs={'class':'form-control','placeholder':"First Name"}),
            'last_name': forms.TextInput(attrs={'class':'form-control','placeholder':"Last Name"}),
            'email': forms.EmailInput(attrs={'class':'form-control','placeholder':"Email"}),
            'message': forms.Textarea(attrs={'class':'form-control textarea','placeholder':"Message"})
        }
