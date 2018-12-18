# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import JsonResponse,HttpResponse
import json
from django.shortcuts import render,redirect
from people.models import person
from login.models import login_user
from django.views.decorators.csrf import csrf_exempt 
# Create your views here.
def latest_people(request):
    personlist=login_user.objects.get(username=request.session['user']).info.all();
    return render(request,'index.html',{'personlist':personlist})
def openaddinfo(request):
     return render(request,'Add.html')
def editinfo(request):
          getname=request.POST.get('name')
          getphone=request.POST.get('phone')
          getemail=request.POST.get('email')
          print(getemail)
          getaddress=request.POST.get('address')
          getQQ=request.POST.get('qq')
          getschool=request.POST.get('school')
          personlist=login_user.objects.get(username=request.session['user']).info.all();
          editperson=personlist.get(name=request.POST.get('old'))
          print(getname)
          try:
               editperson.name=getname
               print(editperson.name)
               editperson.phoneNo=getphone
               print(editperson.phoneNo)

               editperson.email=getemail
               print(editperson.email)
               editperson.address=getaddress
               print(editperson.address)
               editperson.qq=getQQ
               print(editperson.qq)
               editperson.school=getschool
               print(editperson.school)
               editperson.save()
               return  HttpResponse(1)
          except:
               return HttpResponse(0)
@csrf_exempt
def addinfo(request):
          getname=request.POST.get('name')
          getphone=request.POST.get('phone')
          getemail=request.POST.get('email')
          getaddress=request.POST.get('address')
          getQQ=request.POST.get('QQ')
          getschool=request.POST.get('school')
          getuser=login_user.objects.get(username=request.session['user'])
          print(getuser)
          getperson=person(user=getuser,
                           name=getname,
                           school=getschool,
                           address=getaddress,
                           phoneNo=getphone,
                           email=getemail,
                           qq=getQQ
                         )
          getperson.save()
          result="添加成功!"
          msg={"result":result}
          return JsonResponse(msg)
def delete_info(request):
          print(request.session['user'])
          personlist=login_user.objects.get(username=request.session['user']).info.all();
          user_name=request.POST.get('username')
          print(user_name)
          status="删除成功！"
          result="Error!"
          deletesql=personlist.filter(name=user_name)
          if deletesql.delete():
               msg={"status":status}
               return JsonResponse(msg)
          else:
               esg={"result":result}
               return JsonResponse(esg)
def searchinfo(request):
     if request.method=="POST":
          personlist=login_user.objects.get(username=request.session['user']).info.all();
          info=request.POST.get('search')
          keys=request.POST.get('search_select')
          print(info)
          print(keys)
          if keys=="name":
               personlist=personlist.filter(name=info)
          elif keys=="phone":
               personlist=personlist.filter(phoneNo=info)
          elif keys=="email":
               personlist=personlist.filter(email=info)
          elif keys=="address":
               personlist=personlist.filter(address=info)
          elif keys=="QQ":
               personlist=personlist.filter(qq=info)
          elif keys=="school":
               personlist=personlist.filter(school=info)
          return render(request,'index.html',{'personlist':personlist})
      
