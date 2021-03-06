"""web_address_book URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from login import views as login_view
from people import views as person_view
urlpatterns = [
     url(r'^$',login_view.login,name='login'),
     url(r'^login/',login_view.login,),
     url(r'^index',person_view.latest_people),
     url(r'^admin/', admin.site.urls),
     url(r'^delete_info',person_view.delete_info,name='delete_info'),
     url(r'^add_info',person_view.openaddinfo),
     url(r'^add',person_view.addinfo),
     url(r'^search',person_view.searchinfo,name='search'),
     url(r'^editinfo',person_view.editinfo),

]