# Vidéo du hero

Dépose ici ta vidéo de fond sous le nom `hero.mp4` (et, si tu veux une image
affichée pendant le chargement, une image `hero-poster.jpg`).

Le composant `src/components/Hero.tsx` référence déjà :
- `/videos/hero.mp4`
- `/videos/hero-poster.jpg` (poster, optionnel)

Recommandations :
- Format paysage, 16:9, sans son (elle est jouée en muet/loop).
- Compression raisonnable (quelques Mo) pour un chargement rapide — H.264/MP4.
- 10 à 20 secondes en boucle suffisent largement.

Tant qu'aucun fichier n'est présent, le dégradé de fond du hero s'affiche seul.
