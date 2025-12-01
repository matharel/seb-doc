# Thème Seb-doc

Thème générique pour tous mes sites, customisables pour s'adapter à chaque
besoin.


## Le menu

Le menu est généré automatiquement en reprenant le contenu du dossier
`content/`.

Pour organiser l'ordre d'apparition des éléments, il faut soit:

- utiliser le param `weight` du font matter
- si non défini, c'est trier alphabètiquement
- on peut forcer le tri dans le nom des dossiers comme:
  - 10_mon-premier-menu
  - 20_mon-deuxième-menu
  - ... mais dans ce cas-là, il faut définir un slug pour que "10\_"
    n'apparaisse pas dans l'url.


## Robots.txt

Pour interdire la visite d'un site aux robots:

```sh
User-agent: *
{{ range .Pages }}
Disallow: {{ .RelPermalink }}
{{ end }}
```
