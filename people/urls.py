from django.urls import path,url
from . import views
urlpatterns = [
   path("",views.latest_person),
]
