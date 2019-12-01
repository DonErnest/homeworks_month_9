import json

from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def add_numbers(request, *args, **kwargs):
    data = None
    if request.body:
        data = json.loads(request.body)
    answer = {
            'answer': data['A'] + data['B'],
    }
    return JsonResponse(answer)

@csrf_exempt
def substract_numbers(request, *args, **kwargs):
    data= None
    if request.body:
        data = json.loads(request.body)
    answer = {
        'answer': data['A'] - data['B'],
    }
    return JsonResponse(answer)

@csrf_exempt
def multiply_numbers(request, *args, **kwargs):
    data= None
    if request.body:
        data = json.loads(request.body)
    answer = {
        'answer': data['A'] * data['B'],
    }
    return JsonResponse(answer)

@csrf_exempt
def divide_numbers(request, *args, **kwargs):
    data= None
    if request.body:
        data = json.loads(request.body)
    answer = {
        'answer': data['A'] / data['B'],
    }
    return JsonResponse(answer)