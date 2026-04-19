// Script to add form message i18n keys
const fs = require('fs');
const path = require('path');

function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// Form messages translations
const translations = {
  en: {
    common: {
      form: {
        requiredFields: "Please fill in all fields",
        sendFailed: "Failed to send message",
        sendFailedRetry: "Failed to send message. Please try again.",
        requestFailed: "Failed to send request",
        requestFailedRetry: "Failed to send request. Please try again.",
        successMessage: "Message sent successfully",
        submitting: "Sending..."
      }
    }
  },
  zh: {
    common: {
      form: {
        requiredFields: "请填写所有必填字段",
        sendFailed: "发送消息失败",
        sendFailedRetry: "发送消息失败，请重试。",
        requestFailed: "发送请求失败",
        requestFailedRetry: "发送请求失败，请重试。",
        successMessage: "消息发送成功",
        submitting: "发送中..."
      }
    }
  },
  ja: {
    common: {
      form: {
        requiredFields: "すべての項目を入力してください",
        sendFailed: "メッセージの送信に失敗しました",
        sendFailedRetry: "メッセージの送信に失敗しました。もう一度お試しください。",
        requestFailed: "リクエストの送信に失敗しました",
        requestFailedRetry: "リクエストの送信に失敗しました。もう一度お試しください。",
        successMessage: "メッセージが正常に送信されました",
        submitting: "送信中..."
      }
    }
  },
  ko: {
    common: {
      form: {
        requiredFields: "모든 필드를 입력해 주세요",
        sendFailed: "메시지 전송에 실패했습니다",
        sendFailedRetry: "메시지 전송에 실패했습니다. 다시 시도해 주세요.",
        requestFailed: "요청 전송에 실패했습니다",
        requestFailedRetry: "요청 전송에 실패했습니다. 다시 시도해 주세요.",
        successMessage: "메시지가 성공적으로 전송되었습니다",
        submitting: "전송 중..."
      }
    }
  },
  de: {
    common: {
      form: {
        requiredFields: "Bitte füllen Sie alle Felder aus",
        sendFailed: "Nachricht konnte nicht gesendet werden",
        sendFailedRetry: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        requestFailed: "Anfrage konnte nicht gesendet werden",
        requestFailedRetry: "Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        successMessage: "Nachricht erfolgreich gesendet",
        submitting: "Wird gesendet..."
      }
    }
  },
  fr: {
    common: {
      form: {
        requiredFields: "Veuillez remplir tous les champs",
        sendFailed: "L'envoi du message a échoué",
        sendFailedRetry: "L'envoi du message a échoué. Veuillez réessayer.",
        requestFailed: "L'envoi de la demande a échoué",
        requestFailedRetry: "L'envoi de la demande a échoué. Veuillez réessayer.",
        successMessage: "Message envoyé avec succès",
        submitting: "Envoi en cours..."
      }
    }
  },
  es: {
    common: {
      form: {
        requiredFields: "Por favor, complete todos los campos",
        sendFailed: "Error al enviar el mensaje",
        sendFailedRetry: "Error al enviar el mensaje. Por favor, inténtelo de nuevo.",
        requestFailed: "Error al enviar la solicitud",
        requestFailedRetry: "Error al enviar la solicitud. Por favor, inténtelo de nuevo.",
        successMessage: "Mensaje enviado con éxito",
        submitting: "Enviando..."
      }
    }
  },
  pt: {
    common: {
      form: {
        requiredFields: "Por favor, preencha todos os campos",
        sendFailed: "Falha ao enviar mensagem",
        sendFailedRetry: "Falha ao enviar mensagem. Por favor, tente novamente.",
        requestFailed: "Falha ao enviar solicitação",
        requestFailedRetry: "Falha ao enviar solicitação. Por favor, tente novamente.",
        successMessage: "Mensagem enviada com sucesso",
        submitting: "Enviando..."
      }
    }
  },
  ar: {
    common: {
      form: {
        requiredFields: "يرجى ملء جميع الحقول",
        sendFailed: "فشل إرسال الرسالة",
        sendFailedRetry: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        requestFailed: "فشل إرسال الطلب",
        requestFailedRetry: "فشل إرسال الطلب. يرجى المحاولة مرة أخرى.",
        successMessage: "تم إرسال الرسالة بنجاح",
        submitting: "جارٍ الإرسال..."
      }
    }
  },
  ru: {
    common: {
      form: {
        requiredFields: "Пожалуйста, заполните все поля",
        sendFailed: "Не удалось отправить сообщение",
        sendFailedRetry: "Не удалось отправить сообщение. Пожалуйста, попробуйте снова.",
        requestFailed: "Не удалось отправить запрос",
        requestFailedRetry: "Не удалось отправить запрос. Пожалуйста, попробуйте снова.",
        successMessage: "Сообщение успешно отправлено",
        submitting: "Отправка..."
      }
    }
  }
};

// Update each language file
const languages = ['en', 'zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

languages.forEach(lang => {
  const filePath = path.join(__dirname, `${lang}.json`);

  try {
    let content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const langTranslations = translations[lang] || translations.en;
    content = deepMerge(content, langTranslations);
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
  } catch (err) {
    console.error(`Error updating ${lang}.json:`, err.message);
  }
});

console.log('Done adding form message i18n keys!');
