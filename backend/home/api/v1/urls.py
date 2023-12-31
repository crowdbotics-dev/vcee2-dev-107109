from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CderViewSet,Cder2ViewSet,Cder3ViewSet,Cder4ViewSet,CderViewSet,Cder4ViewSet,CderViewSet,Cder4ViewSet,CderViewSet,Cder4ViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('cder', CderViewSet )
router.register('cder2', Cder2ViewSet )
router.register('cder3', Cder3ViewSet )
router.register('cder4', Cder4ViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
