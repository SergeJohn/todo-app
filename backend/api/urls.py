from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('todo_lists/', views.todo_lists, name='todo_lists'),
    path('todo_detail/<str:id>/', views.todo_detail, name='todo_detail'),
    path('add_todo/', views.add_todo, name='add_todo'),
    path('update_todo/<str:id>/', views.update_todo, name='update_todo'),
    path('delete_todo/<str:id>/', views.delete_todo, name='delete_todo')
]