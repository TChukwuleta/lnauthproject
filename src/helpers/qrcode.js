const qr = require('qrcode')
const cloudinary = require('cloudinary')
require('dotenv').config()

const generateQrCodeUrl = async (text) => {
    const url = await qr.toDataURL(text)
    return url
}

const uploadBase64ToCloudinary = async (text) => {
    try {
        const qrcodeUrl = await generateQrCodeUrl(text)
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        })
        const { uploader } = cloudinary
        const res = await uploader.upload(qrcodeUrl)
        return res.secure_url
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    uploadBase64ToCloudinary,
    generateQrCodeUrl
}