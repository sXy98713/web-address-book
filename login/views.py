# -*- coding: utf-8 -*-
from django.shortcuts import render,render_to_response,redirect
from django.http import HttpResponseRedirect
from login.models import login_user
from people import views
# Create your views here
def login(request):
        if request.method=="POST":
            user_name=request.POST.get('Username')
            pass_word=request.POST.get('Password')
            if user_name and pass_word:
                try:
                    loginuser=login_user.objects.get(username=user_name)
                except:
                    return render(request,'login.html')
                if loginuser.password == pass_word:
                    request.session['user']=user_name; 
                    return redirect('/index')
        return render(request,'login.html')

