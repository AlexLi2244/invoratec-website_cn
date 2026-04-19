# Deploy and Sync Notes

## Website Differences

### InvoratecAI.Website (International)
- **Default Language:** English (`locale: 'en'`)
- **Deployment:** Firebase Hosting
- **URL:** https://invoratec-website.web.app
- **Deploy Command:** `npm run deploy`

### InvoratecAI.Website_CN (China)
- **Default Language:** Chinese (`locale: 'zh'`)
- **Deployment:** Aliyun OSS (Hong Kong)
- **URL:** https://invoratec-hk-website.oss-cn-hongkong.aliyuncs.com
- **Deploy Command:** `node upload-to-oss.cjs`
- **Deploy without video:** `node upload-to-oss.cjs --exclude-video`

## Sync Process

When syncing changes from Website to Website_CN:

1. **Copy changed files** from `InvoratecAI.Website` to `InvoratecAI.Website_CN`
2. **DO NOT overwrite** `src/main.ts` - it has different default language settings
3. **Build:** `npm run build`
4. **Deploy:** `node upload-to-oss.cjs --exclude-video`

### Files to Sync (common changes)
- `src/views/*.vue` - View components
- `src/components/**/*.vue` - UI components
- `public/images/**` - Images and screenshots
- `src/styles/**` - Stylesheets
- `src/i18n/*.json` - Translations

### Files NOT to Sync
- `src/main.ts` - Different i18n default (zh vs en)
- `upload-to-oss.cjs` - China-specific deployment script
- `firebase.json` - International-specific

## Key Configuration Differences

### main.ts (Website - International)
```typescript
locale: localStorage.getItem('locale') || 'en',
fallbackLocale: 'en',
```

### main.ts (Website_CN - China)
```typescript
locale: localStorage.getItem('locale') || 'zh',
fallbackLocale: 'zh',
```

## Deployment Commands

### International Website
```bash
cd InvoratecAI.Website
npm run deploy
```

### China Website (HK bucket)
```bash
cd InvoratecAI.Website_CN
npm run build
node upload-to-oss.cjs --exclude-video  # Skip large video files
# or
node upload-to-oss.cjs  # Upload everything including videos
```

## OSS Bucket Info
- **Region:** oss-cn-hongkong
- **Bucket:** invoratec-hk-website
- **DO NOT USE:** invoratec-cn-website (Shanghai) - wrong bucket
