'use client'

import React, { useEffect, useState } from 'react';

export function useScroll(){
    
    const [visibleSections, setVisibleSections] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
          const newVisibleSections = [];
          document.querySelectorAll('.seccion').forEach((section) => {
            if (isElementInViewport(section)) {
              newVisibleSections.push(section.id);
            }
          });
          setVisibleSections(newVisibleSections);
        };
      
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Llamamos a handleScroll para inicializar las secciones visibles al cargar la página
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
      const isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.bottom >= 0 && rect.top <= window.innerHeight;
      };

    return {visibleSections}
}