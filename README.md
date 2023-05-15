# OpenBooking App with Nextjs Prisma PostgreSQL

## Overview

```text
1. openbooking.com
  - homepage

2. openbooking.com/search
  - searchPage

3. openbooking.com/restaurant/{dynamic_restaurant}
  - restaurantDetailsPage

4. openbooking.com/restaurant/{dynamic_restaurant}/menu
  - restaurantMenuPage

5. openbooking.com/reserve/{dynamic_restaurant}

```

### File Based Routing

### Server and Client Components

| What do you need to do?                                                     | Server | Client |
| --------------------------------------------------------------------------- | ------ | ------ |
| Fetch data                                                                  | Y      | ?      |
| Access backend resources (directly)                                         | Y      | N      |
| Keep senditive information on the server<br>(Access tokens, API keys, etc)  | Y      | N      |
| Keep large dependencies on the server / <br>Reduce client-side JavaScript   | Y      | N      |
| Add interactivity and event listeners <br>(onClick(), onChange(), etc)      | N      | Y      |
| Use State and Lifecycle Effects (useState(), <br>useReducer(), useEffect()) | N      | Y      |
| Use browser-only APIs                                                       | N      | Y      |
| Use custom hooks that depend on state, effects,<br>or browser-only APIs     | N      | Y      |
| User React Calss components                                                 | N      | Y      |

### Prisma

- connecting to postgres database

```bash
npm install prisma

npx prisma init
```

- After initialization, schema.prisma will be created and .env
- Edit credentials and tables schema
- Then connect to the database and update the schema using prisma

```bash
npx prisma db push
```

- Seed data to the database
  `pages/api/hello.ts
