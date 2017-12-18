from django.shortcuts import render

from keras.models import model_from_json

# Create your views here.

#the view here probably needs to load the model, load the weights,
#and then make a prediction and send back the data.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
import pdb
import numpy

@csrf_exempt
def neural_network_list(request):
    if request.method == 'GET':
        return JsonResponse('{response: "ERROR - use post"}', safe=False,status=400)

    elif request.method == 'POST':
        try:
            # This all needs to go out of this part and into something else.
            pdb.set_trace()
            json_file = open(os.path.join('neural_net','encoded_model_for_js', 'model.json')).read()
            weights_file = os.path.join('neural_net','encoded_model_for_js', 'model.h5')
            first_test = numpy.array(request.get_json()['input'])

            # numpy.array([[ 0,  1,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            # 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            # 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            # 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
            # 0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,]])
            model = model_from_json(json_file)
            model.load_weights(weights_file)

        except Exception as ex:
            return JsonResponse('{response: "ERROR - loading did not work"}', safe=False,status=400)

        prediction = model.predict(first_test).tolist()
        return JsonResponse('{response: %s }' % prediction[0].index(max(prediction[0])), safe=False)

@csrf_exempt
def neural_network_detail(request, pk):
    if request.method == 'GET':
        return JsonResponse('{response: "get something specific"}', safe=False)

    elif request.method == 'PUT':
        return JsonResponse('{response: "ERROR"}', safe=False, status=400)

    elif request.method == 'DELETE':
        return JsonResponse('{response: "DELETE"}', safe=False, status=204)
