from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response

class DataApi(APIView):

    def __init__(self):
        self.result = ""

    def get(self, request, **args):
        return Response(data = "Hello, Django is working")
