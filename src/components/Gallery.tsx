import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const gallery = siteConfig.gallery;

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = gallery.findIndex((_, idx) => idx === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : gallery.length - 1;
    } else {
      newIndex = currentIndex < gallery.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(newIndex);
  };

  const selectedItem = selectedImage !== null ? gallery[selectedImage] : undefined;
  
  if (gallery.length === 0) return null;

  return (
    <section id="gallery" className="py-20 bg-section" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 id="gallery-heading" className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-xl text-center text-subtle mb-16">
            Moments from my professional journey
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, idx) => (
              <Card 
                key={idx} 
                className="card-hover transition-all duration-300 border-primary/10 shadow-royal group cursor-pointer overflow-hidden"
                onClick={() => openLightbox(idx)}
              >
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <ZoomIn className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.alt}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Lightbox */}
          <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
            <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
              {selectedItem && (
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                    onClick={closeLightbox}
                    aria-label="Close lightbox"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => navigateImage('prev')}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => navigateImage('next')}
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                    <h3 className="text-xl font-semibold mb-2">{selectedItem.alt}</h3>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}