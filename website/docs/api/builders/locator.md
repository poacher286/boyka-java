---
title: Locator
sidebar_position: 3
---

## Properties

### `name`

This property will set the name of the WebElement. This property is required.

```java
. . .
private final Locator loginButton = Locator.buildLocator ()
    .web (By.id ("login-button"))
    // highlight-next-line
    .name ("Login Button")
    .build ();
. . .
```

### `android`

This property will set Android specific locator.

```java
. . .
private final Locator loginButton = Locator.buildLocator ()
    .web (By.id ("login-button"))
    // highlight-next-line
    .android (AppiumBy.accessibilityId ("test-LOGIN"))
    .name ("Login Button")
    .parent (this.loginBox)
    .build ();
. . .
```

### `ios`

This property will set iOS specific locator.

```java
. . .
private final Locator loginButton = Locator.buildLocator ()
    .web (By.id ("login-button"))
    // highlight-next-line
    .ios (AppiumBy.accessibilityId ("test-LOGIN"))
    .name ("Login Button")
    .parent (this.loginBox)
    .build ();
. . .
```

### `filter`

This property will set the filter on the WebElement.

```java
. . .
private final Locator title = Locator.buildLocator ()
    .web (By.tagName ("h3"))
    // highlight-next-line
    .filter (e -> e.getText ().contains ("Some Text"))
    .name ("Title")
    .build ();
. . .
```

### `index`

This property will set the index for the WebElement.

```java
. . .
private final Locator title = Locator.buildLocator ()
    .web (By.tagName ("h3"))
    // highlight-next-line
    .index (1)
    .name ("Title")
    .build ();
. . .
```

### `parent`

This property will set the parent locator for the current WebElement.

```java
. . .
private final Locator loginBox = Locator.buildLocator ()
    .web (By.id ("login_button_container"))
    .android (AppiumBy.accessibilityId ("test-Login"))
    .name ("Login Box")
    .build ();
private final Locator username = Locator.buildLocator ()
    .web (By.id ("user-name"))
    .android (AppiumBy.accessibilityId ("test-Username"))
    .name ("User Name")
    // highlight-next-line
    .parent (this.loginBox)
    .build ();
. . . 
```

### `web`

This property will set Web specific locator.

```java
. . .
private final Locator loginButton = Locator.buildLocator ()
    // highlight-next-line
    .web (By.id ("login-button"))
    .name ("Login Button")
    .build ();
. . .
```

### `shadowRoot`

This property will mark the element as shadow root element when set to `true`.

```java
. . .
private final Locator shadowParent = Locator.buildLocator ()
    .web (By.tagName ("div"))
    // highlight-next-line
    .shadowRoot (true)
    .name ("Title")
    .build ();
. . .
```

## Methods

### `getLocator` {#get-locator}

This method will get the locator for the platform the test is running for.

```java
. . .
private final Locator username = Locator.buildLocator ()
    .web (By.id ("user-name"))
    .android (AppiumBy.accessibilityId ("test-Username"))
    .name ("User Name")
    .waitStrategy (WaitStrategy.CLICKABLE)
    .build ();
. . .
By locatorElement = username.getLocator ();
. . . 
```
