from neural_net import views
from django.conf.urls import include, url

urlpatterns = [
    url(r'^neural_net/$',views.NeuralNetworkViewSet),
    url(r'^neural_net/(?P<pk>[0-9]+)/$',views.NeuralNetworkViewSet)
]
