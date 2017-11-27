from django.shortcuts import render

# Create your views here.

#the view here probably needs to load the model, load the weights,
#and then make a prediction and send back the data.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def neural_network_list(request):
    if request.method == 'GET':
        return JsonResponse('{retort: "get"}', safe=False)

    elif request.method == 'POST':
        return JsonResponse('{response: "ERROR"}', safe=False,status=400)

@csrf_exempt
def neural_network_detail(request, pk):
    if request.method == 'GET':
        return JsonResponse('{response: "get"}', safe=False)

    elif request.method == 'PUT':
        return JsonResponse('{response: "ERROR"}', safe=False, status=400)

    elif request.method == 'DELETE':
        return JsonResponse('{response: "DELETE"}', safe=False, status=204)
