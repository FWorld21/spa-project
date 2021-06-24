import os
from django.shortcuts import render


# Create your views here.
def crystal_spa(request):
    name = request.GET.get('name')
    phone = request.GET.get('phone')
    if name and phone:
        os.system(f'bot_engine/main.py -n "{name}" -p "{phone}"')
    return render(request, 'crystalSpa/index.html')
