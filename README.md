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
- Supabase service was not stable with free version, so tested them PostgreSQL with Pgadmin locally.

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

### Render Title

```javascript
const renderTitle = () => {
  const nameArray = name.split('-')
  // get last portion of name
  nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`
  return nameArray.join(' ')
}
```

### Sidebar Search function

```javascript
<Link
  href={{
    pathname: '/search',
    query: {
      city: location.name,
    },
  }}
  key={location.id}
  className='font-light text-reg capitalize'
>
  {location.name}
</Link>
```

### filtering

`/search?city=ottawa&cuisine=indian&price=REGULAR`

### Search by restaurant name

### Stars rating function

### Handling Loading and Errors States

- create `loading.tsx` file in app dir
