# Sync Notes: Website to Website_CN

## DO NOT OVERWRITE - Region-Specific Settings

When syncing changes from InvoratecAI.Website to InvoratecAI.Website_CN, preserve these differences:

### 1. Default Language
- **International**: English (`en`)
- **China**: Chinese (`zh-CN`)

### 2. Video URLs
- **International**: YouTube/Vimeo URLs
- **China**: Bilibili or local video URLs (YouTube is blocked in China)

### 3. Signup/Login URLs (in marketing pages)
- **International**: `https://cloud.invoratec.com/signup`, `https://cloud.invoratec.com/login`
- **China**: `https://web.invoratec.cn/signup`, `https://web.invoratec.cn/login`

### 4. API Endpoints / Backend URLs
- Check `.env` and `.env.production` files for region-specific configurations

### 5. Analytics / Tracking
- **International**: Google Analytics, etc.
- **China**: China-compatible analytics (Baidu, etc.)

---

## Deployment Checklist for Website_CN

Before deploying to OSS, verify:

- [ ] Default language is set to Chinese
- [ ] All video URLs point to Bilibili or local sources (not YouTube)
- [ ] Signup/Login buttons link to `web.invoratec.cn` (not `cloud.invoratec.com`)
- [ ] No Google services that are blocked in China
- [ ] Check `.env.production` has correct China backend URLs

## Deploy Command
```powershell
# From InvoratecAI.Website_CN directory
npm run build
# Then upload dist/ to Aliyun OSS
```

---

## Files to Check Before Sync

1. `src/App.vue` - default locale setting
2. `src/i18n/` - language files
3. `src/views/HomeView.vue` - video URLs, signup links
4. `src/views/FeaturesView.vue` - video URLs
5. `src/views/PricingView.vue` - signup links
6. `src/components/` - any hardcoded URLs
7. `.env` / `.env.production` - API endpoints