# Node.js Events

## Introduction

Used to chain together certain actions via `on` and `emit` methods
 - Listen for `emit` and perform some logic specified under `on` which is listening for the event.
 - Same emit message can be used for multiple responses
 - Order matters: first `on` and then `emit` 