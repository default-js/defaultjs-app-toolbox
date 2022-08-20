# defaultjs-app-toolbox

- [defaultjs-app-toolbox](#defaultjs-app-toolbox)
  - [How to install](#how-to-install)
  - [How to use](#how-to-use)

## How to install

## How to use

```html
<d-application route="[DEFAULT_ROUTE]">
    <nav class="app-nav">
        <d-route name="[ROUTE-NAME]" template="[URL|SELECTOR]" context="[JSON OBJECT]" view="[VIEW-NAME]" stateful refesh></d-route>
        <d-route name="[ROUTE-NAME]" component-tag="[NAME OF A TAG]" component-tag-attributes="[JSON OBJECT]" view="[VIEW-NAME]" stateful refesh></d-route>
    </nav>    
    <d-view name="[VIEW-NAME]">
    </d-view>
    <d-route-link target="[ROUTE-NAME]" context="[JSON OBJECT]" view="[VIEW-NAME]" refresh></d-route-link>
</d-application>
```
