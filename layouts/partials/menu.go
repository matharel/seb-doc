<!--
https://github.com/alex-shpak/hugo-book/blob/master/layouts/partials/docs/menu-filetree.html
-->


{{ $section := .Section }}{{/* probablement pour garder le bon scope */}}

{{ with .Site.GetPage }}
  {{ template "section-children" (dict "Section" . "CurrentPage" $) }}
{{ end }}

{{ define "section-children" }}{{/* (dict "Section" .Section "CurrentPage" .CurrentPage) */}}
  <ul>
    {{ range (where .Section.Pages "Params.pagehidden" "ne" true) }}
      {{ if .IsSection }}
        <li  class="section" >
          {{ template "page-link" (dict "Page" . "CurrentPage" $.CurrentPage "isSection" true) }}
          {{ template "section-children" (dict "Section" . "CurrentPage" $.CurrentPage) }}
        </li>
      {{ else if and .IsPage .Content }}
        <li>
          {{ template "page-link" (dict "Page" . "CurrentPage" $.CurrentPage "isSection" false) }}
        </li>
      {{ end }}
    {{ end }}
  </ul>
{{ end }}

{{ define "page-link" }}{{/* (dict "Page" .Page "CurrentPage" .CurrentPage) */}}
  {{ $current := eq .CurrentPage .Page }}
  {{ $ancestor := .Page.IsAncestor .CurrentPage }}

  {{ if .Page.Params.menuOff }}
    <span>
      {{- partial "doc-titles" .Page -}}
    </span>
    {{/* -- si je veux un traitement particulier aux sections (par exemple pas un lien)
  {{ else if .isSection }}
  <span>{{- partial "doc-titles" .Page -}}</span>
  */}}
  {{ else if $ancestor }} {{/* c'est une section mère */}}
    <span class="active">{{ partial "doc-titles" .Page }}</span>
  {{ else  }}
    {{ if $current }}
    <span class="active">{{ partial "doc-titles" .Page }}</span>
    {{ else }}
    <a href="{{ .Page.RelPermalink }}" class="{{ if $current }}active{{ end }}">
      {{- partial "doc-titles" .Page -}}
    </a>
    {{ end }}

  {{ end }}
{{ end }}
