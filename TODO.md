## table

Il faudrait qu'en version mobile quand le tableau est trop large, le tableau
soit scrollable horizontalement (et que ça ne soit pas la page totale qui
scrolle).

## Features

- des jolies tableaux
- table rendered hook
- mettre à jour sass

### Classes

Que ce soit pour les admonitions, les notices, les `blocs` spéciaux (structures
de morceaux, parcours escalade, ...), il faut que je puisse faire un div avec
des classes.

Il existe déjà une manière d'ajouter des classes, c'est ce que je faisais en
détournant le blockquote avec les admonitions. => Ça marche super bien avec les
blocs individuels `<p>`, les `<ul>`, les `<ol>`, etc ... => Par contre one peut
pas avoir tout un bloc, qui englobe d'autres blocs.

Il me faudrait donc faire un (ou des ?) shortcode

Inspiration esthètiques pour les admonitions:
[hugo-notice](https://github.com/martignoni/hugo-notice?tab=readme-ov-file)
[hugo learn theme](https://learn.netlify.app/en/)

technique:

- premier exemple très basqiue. J'aime bien l'idée d'avoir pleins de shortcodes
  qui correspondent à des tages ou des balises html.
  [Hugo Shortcode - aside blocke](https://tangiblebytes.co.uk/2020/hugo-shortcode/)
- sinon on passe le nom de la classe dans le shortcode:
  [How would you pass a class to markdown](https://discourse.gohugo.io/t/how-would-you-pass-a-class-to-markdown/29015)

```hugo
{{< html-tag tag="section" class="my-class-name" >}}
# Heading

- list item
- list item
{{< /html-tag >}}
```

Peut-être que c'est overkill le tag. Ou alors faire en sorte que le tag par
défaut soit un div et avoir la possibilité de le surcharger par un autre tag.

En tout cas, voici une très bonne ressource pour pouvoir faire ce shortcode:
[Create your own shortcodes](https://gohugo.io/templates/shortcode-templates/)
