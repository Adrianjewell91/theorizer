from django.shortcuts import render

# Create your views here.

#the view here probably needs to load the model, load the weights,
#and then make a prediction and send back the data.
from rest_framework import viewsets
from rest_framework.response import Response

class NeuralNetworkViewSet(viewsets.ViewSet):
    def list(self, request,):
        return Response({reponse: "list"})

    def create(self, request,):
        return Response({reponse: "create"})

    def retrieve(self, request, pk=None):
        return Response({reponse: "retrieve"})

    def destroy(self, request, pk=None):
        return Response({reponse: "destroy"})
