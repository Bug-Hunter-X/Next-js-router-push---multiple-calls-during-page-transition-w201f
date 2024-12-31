# Next.js router.push() Multiple Calls During Transition Bug

This repository demonstrates a bug in Next.js where calling `router.push()` multiple times during the same page transition can lead to unexpected behavior or errors.  The issue arises because the router might not handle consecutive `push` calls gracefully, potentially leading to dropped navigations or incorrect state management.

## Problem

The provided `bug.js` file showcases a simple component with a button. Clicking this button attempts to navigate to two different routes sequentially using `router.push()`.  This can cause unpredictable routing behavior.

## Solution

The `bugSolution.js` file provides a solution that addresses the issue.  The main approach is to conditionally perform the second navigation after the first one completes. This utilizes the `router.events` to ensure that the second navigation is triggered only after the initial transition is finished.