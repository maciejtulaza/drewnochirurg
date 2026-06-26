# DNS Configuration for drewnochirurg.pl

## GitHub Pages Setup

Your site is now pushed to GitHub. Follow these steps to complete the setup:

### 1. Enable GitHub Pages

1. Go to https://github.com/maciejtulaza/drewnochirurg/settings/pages
2. Under "Source", select "Deploy from a branch"
3. Select branch: **main** and folder: **/ (root)**
4. Click "Save"

### 2. Configure DNS Records

Log in to your domain registrar where you bought **drewnochirurg.pl** and add these DNS records:

#### Rekordy A (dla głównej domeny drewnochirurg.pl)

Dodaj **4 rekordy A** - każdy z innym adresem IP:

```
Typ: A
Nazwa: @ (lub puste pole dla korzenia domeny)
Wartość: 185.199.108.153
TTL: 3600
```

```
Typ: A
Nazwa: @
Wartość: 185.199.109.153
TTL: 3600
```

```
Typ: A
Nazwa: @
Wartość: 185.199.110.153
TTL: 3600
```

```
Typ: A
Nazwa: @
Wartość: 185.199.111.153
TTL: 3600
```

#### Rekord CNAME (opcjonalnie dla www.drewnochirurg.pl)

Jeśli chcesz żeby działało też **www.drewnochirurg.pl**, dodaj:

```
Typ: CNAME
Nazwa: www
Wartość: maciejtulaza.github.io
TTL: 3600
```

**WAŻNE:** CNAME **nie może** być użyty dla korzenia domeny (@) - tylko dla subdomen typu "www". Dla głównej domeny używamy rekordów A.

### 3. Wait for DNS Propagation

- DNS changes can take 24-48 hours to fully propagate
- You can check status at: https://dnschecker.org

### 4. Enable HTTPS

After DNS is configured and GitHub Pages recognizes your domain:

1. Go back to https://github.com/maciejtulaza/drewnochirurg/settings/pages
2. Wait for the "Enforce HTTPS" checkbox to become available (may take a few hours)
3. Check "Enforce HTTPS"

## Verification

Once DNS propagates, your site will be available at:
- https://drewnochirurg.pl
- https://www.drewnochirurg.pl (if you added the CNAME)

## Current Status

✅ Repository initialized with local git config (tulaza.maciej@gmail.com)
✅ CNAME file created
✅ Code pushed to GitHub
⏳ Pending: GitHub Pages activation
⏳ Pending: DNS configuration
⏳ Pending: DNS propagation
⏳ Pending: HTTPS setup
