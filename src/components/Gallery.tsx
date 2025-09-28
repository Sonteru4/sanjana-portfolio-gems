import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: gallery1,
    title: "Data Science Workspace",
    description: "My daily workspace where I develop and deploy machine learning models, featuring multiple monitors for data visualization and code development.",
    category: "Workspace"
  },
  {
    id: 2,
    src: gallery2,
    title: "Conference Presentation",
    description: "Presenting AI/ML insights at a tech conference, sharing innovative approaches to predictive analytics with industry professionals.",
    category: "Speaking"
  },
  {
    id: 3,
    src: gallery3,
    title: "Team Collaboration",
    description: "Leading a cross-functional team in designing machine learning solutions, combining domain expertise with technical innovation.",
    category: "Leadership"
  },
  {
    id: 4,
    src: gallery4,
    title: "Innovation Award",
    description: "Receiving recognition for developing breakthrough AI solutions that delivered significant business impact and cost savings.",
    category: "Achievement"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
    } else {
      newIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryItems[newIndex].id);
  };

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <section id="gallery" className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-xl text-center text-subtle mb-16">
            Moments from my professional journey
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <Card 
                key={item.id} 
                className="card-hover transition-all duration-300 border-primary/10 shadow-emerald group cursor-pointer overflow-hidden"
                onClick={() => openLightbox(item.id)}
              >
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <ChevronRight className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
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
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => navigateImage('prev')}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => navigateImage('next')}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                    <h3 className="text-xl font-semibold mb-2">{selectedItem.title}</h3>
                    <p className="text-sm opacity-90">{selectedItem.description}</p>
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