from django.shortcuts import render

from keras.models import model_from_json

# Need these if keras is not defaulted to theano. Gonna solve tensorflow some other time.
# From keras import backend
# KERAS_BACKEND=theano

# Create your views here.

#the view here probably needs to load the model, load the weights,
#and then make a prediction and send back the data.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
from django.conf import settings
import pdb
import numpy
import json

# numpy.array([[ 0,  1,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,
# 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
# 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
# 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
# 0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,]])

# json_file = open(os.path.join('neural_net','encoded_model_for_js', 'model.json')).read()
# weights_file = os.path.join('neural_net','encoded_model_for_js', 'model.hdf5')

# @csrf_exempt
def neural_network_list(request):
    if request.method == 'POST':
        return JsonResponse('{response: "ERROR - use get"}', safe=False,status=400)

    elif request.method == 'GET':
        # This all needs to go out of this part and into something else.
        # pdb.set_trace()
        # model = model_from_json(json_file)
        # model.load_weights(weights_file)
        # model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
        # try:
        # except Exception:
        #     pass
            # return JsonResponse('{response: "ERROR - loading did not work"}', safe=False,status=400)

        first_test = numpy.array([[int(s) for s in request.GET['input'].split(',')]])
        prediction = settings.MODEL.predict(first_test).tolist()
        return JsonResponse('{"response": %s}' % prediction[0].index(max(prediction[0])), safe=False)

# @csrf_exempt
def neural_network_detail(request, pk):
    if request.method == 'GET':
        return JsonResponse('{response: "get something specific"}', safe=False)

    elif request.method == 'PUT':
        return JsonResponse('{response: "ERROR"}', safe=False, status=400)

    elif request.method == 'DELETE':
        return JsonResponse('{response: "DELETE"}', safe=False, status=204)
