---
title: Modeling
description: Bot project models
tags:
- Bot
sidebar_position: 1
---

In this part, we introduce the modeling with the help of [UML](https://en.wikipedia.org/wiki/Unified_Modeling_Language). This includes actors, use cases and diagrams. Our objective here is to share our vision about the project, and help you understand it's structure and behaviors.

## Actors
the following are potential actors that can be affected by the bot system:
1. Member (Inherits from User)
2. Admin (Inherits from Member)
3. DiscordApi

### Member
Represents a regular user on our server. They have the ability to interact with the bot in various ways such as using commands to get information, or get mentioned by automatic messages, etc.

### Admin (inherits from Member)
Represents a member with more permissions. In addition to all capabilities of a Member, they have the ability to manage the bot, which may include tasks like configuring bot settings, or moderating the bot behavior.

### Discord API
The bot interacts with the Discord API to perform various actions like sending messages, reacting to events, managing server settings etc.

## Use Cases
In this section we introduce potential initial use cases.

![](/diagramming-exported/init-usecases.png)

The following expandable cards, hold usecases descriptions, we hope you like reading each of them.

### Auto Welcome Message
When a new member joins the server, they are automatically greeted with a welcoming message in a dedicated channel.

**Actors:** [Member](#member), [DiscordApi](#discord-api)

**Precondition:** A member joins the server.

**Post-condition:** A new member feels acknowledged.

### Mention Server Rules
This is a command that allows any member to reference a specific server rule or list all rules, ensuring members are always reminded of community guidelines.

**Actors**: [Member](#member), [DiscordApi](#discord-api)

**Precondition**: Member wants to mention or review a rule.

**Post-condition**: Members have easy access to server rules.

### Get Help
Members may use a command to get a comprehensive list of available server commands, and potentially some onboarding tips.

**Actors:** [Member](#member), [DiscordApi](#discord-api)

**Precondition**: Member or visitor wants to know available commands.

**Post-condition:** The user is informed about how to interact with the bot and server functionalities.

### Auto Welcome Question
Whenever a member posts a question in "ask" channel, the bot prompts community helpers to pay attention and offers some tips to the asker.

**Actors:** Member, DiscordApi

**Precondition:** A member has a question and posts it in the "ask" channel.

**Post-condition:** Community helpers are alerted to the new question and the asker is provided with guidance.
