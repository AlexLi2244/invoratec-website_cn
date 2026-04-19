# InvoratecAI.Website_CN Deployment Notes

## CRITICAL: Correct OSS Configuration

| Setting | Value |
|---------|-------|
| **Region** | `oss-cn-hongkong` |
| **Bucket** | `invoratec-hk-website` |
| **Website URL** | https://invoratec-hk-website.oss-cn-hongkong.aliyuncs.com |

## DO NOT USE (Wrong bucket)
- ~~oss-cn-shanghai~~
- ~~invoratec-cn-website~~

## Deployment Commands

```bash
# Build first
npm run build

# Deploy (exclude video for faster upload)
node upload-to-oss.cjs --exclude-video

# Deploy with video
node upload-to-oss.cjs
```

## Sync from Website before deployment

```bash
# Sync src folder (exclude node_modules)
robocopy "c:\Users\servi\source\repos\InvoratecAI.Website\src" "c:\Users\servi\source\repos\InvoratecAI.Website_CN\src" /MIR /XD node_modules

# Sync public folder (exclude video)
robocopy "c:\Users\servi\source\repos\InvoratecAI.Website\public" "c:\Users\servi\source\repos\InvoratecAI.Website_CN\public" /MIR /XF *.mp4 *.webm *.avi *.mov
```