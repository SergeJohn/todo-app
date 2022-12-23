from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response 
from rest_framework.decorators import api_view
from .serializers import TodoSerializer
from .models import Todo

# Create your views here.

@api_view(['GET'])
def index(request):
    return Response('hello')


@api_view(['GET'])
def todo_lists(request):
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def todo_detail(request, id):
    todo = Todo.objects.get(pk=id)
    serializer = TodoSerializer(todo, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def add_todo(request):
    serializer = TodoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def update_todo(request, id):
    todo = Todo.objects.get(pk=id)
    serializer = TodoSerializer(instance=todo, data=request.data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)


@api_view(['DELETE'])
def delete_todo(request, id):
    todo = Todo.objects.get(pk=id)
    todo.delete()
    return Response('Successfully deleted')