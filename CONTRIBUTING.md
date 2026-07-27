# Contributing

## Setting up MongoDB

This app needs a MongoDB instance reachable via the `MONGODB_URI` env var (see `.env.sample`). Pick whichever of the two options below fits you best — both work equally well with the app and with `scripts/seed.js`.

### Option A: Local MongoDB via Homebrew (no account, no internet needed)

```shell
brew install mongodb-community
brew services start mongodb-community
```

Then in your `.env`:

```shell
MONGODB_URI=mongodb://localhost:27017/golang_db
```

To stop it later: `brew services stop mongodb-community`.

### Option B: MongoDB Atlas (free tier, cloud-hosted)

1. Create a free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Create a free M0 cluster.
3. Under **Database Access**, create a database user with a password.
4. Under **Network Access**, allow your current IP (or `0.0.0.0/0` for local development only).
5. Click **Connect > Drivers**, copy the connection string, and put it in your `.env`:

```shell
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/golang_db?retryWrites=true&w=majority
```

## Seeding sample data

Once `MONGODB_URI` is set (either option above), populate the `todos` collection with sample tasks:

```shell
mongosh "$MONGODB_URI" scripts/seed.js
```

See the README's "Seed the database" section for details on what it does.
