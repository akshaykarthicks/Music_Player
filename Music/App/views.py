# Create your views here.
from django.shortcuts import render,redirect
# imported our models
from django.core.paginator import Paginator
from . models import Song



def index(request):
    paginator= Paginator(Song.objects.all(),1)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    # Get the current song object
    # This is crucial for accessing song details like title, artist, audio, and lyrics
    current_song = page_obj.object_list[0]

    context={
        "page_obj":page_obj,
        "item": current_song, # Pass the current song as 'item' for the template
        "current_page_number": page_obj.number, # Add current page number
        "num_pages": paginator.num_pages, # Add total number of pages
    }
    return render(request,"index.html",context)