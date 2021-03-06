## Description

An **sp-button** represents an action a user can take. sp-buttons can be clicked
or tapped to perform an action or to navigate to another page. sp-buttons in
Spectrum have several variations for different uses and multiple levels of
loudness for various attention-getting needs.

### Installation

```
npm install @spectrum-web-components/button

# or

yarn add @spectrum-web-components/button
```

## Example

```html demo
<sp-button>Hello world</sp-button>
```

## Variants

There are many button variants to choose from in Spectrum. The `variant`
attribute controls the main variant of the button, and a few other boolean
attributes can be combined to apply sub-variants, e.g. `quiet`.

### Normal

```html
<sp-button variant="cta">CTA</sp-button>
<sp-button variant="primary">Primary</sp-button>
<sp-button variant="secondary">Secondary</sp-button>
<sp-button variant="negative">Negative</sp-button>
```

### Quiet

```html
<sp-button quiet variant="primary">Quiet Primary</sp-button>
<sp-button quiet variant="secondary">Quiet Secondary</sp-button>
<sp-button quiet variant="negative">Quiet Negative</sp-button>
```

## Content

**sp-buttons** can have a label, or a label with an icon. An icon is provided by
placing an icon component to the `icon` slot. The icon may be an `sp-icon` or an
SVG.

```html
<sp-icons-medium></sp-icons-medium>
<sp-button variant="primary">Label only</sp-button>
<sp-button variant="primary">
    <sp-icon slot="icon" size="s" name="ui:HelpMedium"></sp-icon>
    Icon + Label
</sp-button>
<sp-button variant="primary">
    <svg
        slot="icon"
        viewBox="0 0 36 36"
        focusable="false"
        aria-hidden="true"
        role="img"
    >
        <path
            d="M16 36a4.407 4.407 0 0 0 4-4h-8a4.407 4.407 0 0 0 4 4zm9.143-24.615c0-3.437-3.206-4.891-7.143-5.268V3a1.079 1.079 0 0 0-1.143-1h-1.714A1.079 1.079 0 0 0 14 3v3.117c-3.937.377-7.143 1.831-7.143 5.268C6.857 26.8 2 26.111 2 28.154V30h28v-1.846C30 26 25.143 26.8 25.143 11.385z"
        ></path>
    </svg>
    SVG Icon + Label
</sp-button>
```

## States

In addition to the variant, **sp-buttons** have a disabled state visual state
which can be applied by adding the attribute `disabled`. All spectrum-button
variants support the In addition to affectng the visual state, the `disabled`
attribute prevents focus and disallows `click` events.

```html
<sp-button variant="primary">Normal</sp-button>
<sp-button variant="primary" disabled>Disabled</sp-button>
```

## Handling events

Events handlers for clicks and other user actions can be registered on a
`spectrum-button` just as on a normal HTML `button` element.

```html
<sp-button onclick="alert('spectrum-button clicked!')">Click me</sp-button>
```

### Autofocus

The `autofocus` attribute sets focus to the **sp-button** when the component
mounts. This is useful for setting focus to a specific sp-button when a
popover or dialog opens.

```html
<sp-button autofocus>Confirm</sp-button>
```
