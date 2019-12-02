import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.base import TemplateView


@csrf_exempt
def add_numbers(request, *args, **kwargs):
    data = None
    if request.body:
        data = json.loads(request.body)
        print(data)
    if check_if_numbers(data):
        answer = {
                'answer': float(data['A']) + float(data['B']),
        }
        return JsonResponse(answer)
    else:
        error = {
            'error': 'One or both values are not numbers or missing!', }
        return JsonResponse(error, status=400)

@csrf_exempt
def substract_numbers(request, *args, **kwargs):
    data= None
    if request.body:
        data = json.loads(request.body)
    if check_if_numbers(data):
        answer = {
            'answer': float(data['A']) - float(data['B']),
        }
        return JsonResponse(answer)
    else:
        error = {
            'error': 'One or both values are not numbers or missing!', }
        return JsonResponse(error, status=400)


@csrf_exempt
def multiply_numbers(request, *args, **kwargs):
    data= None
    if request.body:
        data = json.loads(request.body)
    if check_if_numbers(data):
        answer = {
            'answer': float(data['A']) * float(data['B']),
        }
        return JsonResponse(answer)
    else:
        error = {
            'error': 'One or both values are not numbers or missing!', }
        return JsonResponse(error, status=400)


@csrf_exempt
def divide_numbers(request, *args, **kwargs):
    data= None
    if request.body:
        data = json.loads(request.body)
    if check_if_numbers(data):
        answer = {
            'answer': float(data['A']) / float(data['B']),
        }
        return JsonResponse(answer)
    else:
        error = {
            'error': 'One or both values are not numbers or missing!', }
        return JsonResponse(error, status=400)


def check_if_numbers(data):
    try:
        float(data['A'])
        float(data['B'])
        return True
    except ValueError:
        return False

class IndexView(TemplateView):
    template_name = 'base.html'

