define({
  betaMessage: {
    title: 'إصدار بيتا من \"تعهيد خريطة القصة\"',
    messageParagraphs: {
      p1: 'يتميز هذا الإصدار من \"تعهيد خريطة القصة\" باكتمال مزاياه الأساسية، كما أنه إصدار مُستقر. وقد تم إطلاقه كإصدار بيتا حتى يمكن لـ \"فريق خرائط القصة\" تجميع ملاحظاتك والملاحظات التي يبديها مجتمع Esri ودمجها قبل الإصدار الأوّلي.',
      p2: 'ستستمر القصص المُنشأة بهذا الإصدار البيتا في العمل كالمعتاد مع الإصدارات اللاحقة إلا إذا قمت بتعديلها أو وُجِدَ أحد مكوناتها خارج \"المنشئ\".',
      p3: 'يرجى قراءة التعليمات لمزيد من المعلومات عن كيفية استخدام هذا التطبيق وموضع إرسال الملاحظات.'
    }
  },
  common: {
    appNameAppend: 'مُنشئ',
    buttons: {
      next: 'التالي'
    }
  },
  banner: {
    buttons: {
      feedback: 'تعليق',
      help: 'تعليمات',
      preview: 'عرض مباشر',
      share: 'مشاركة',
      settings: 'إعدادات',
      save: 'حفظ',
      toggleNav: 'تبديل الانتقال'
    },
    hintText: {
      saved: 'تم حفظ القصة',
      saving: 'حفظ',
      leavingBeforeSave: 'لديك تغييرات غير محفوظة في القصة. إذا غادرت الآن، سيتم فقدان هذه التغييرات.'
    }
  },
  header: {
    participateBtnDisabledTooltip: 'أغلق لوحة الإعدادات للتمكين'
  },
  introSplash: {
    form: {
      title: {
        label: 'عنوان',
        placeholder: 'أدخل عنوانًا'
      },
      subtitle: {
        label: 'رسالة تغطية',
        placeholder: 'أضف رسالة تغطية...'
      },
      exploreButton: {
        label: 'تسمية زر الخريطة',
        placeholder: 'أدخل تسمية'
      }
    }
  },
  map: {
    editControls: {
      homeLocation: {
        tooltip: 'حفظ الموقع الرئيسي'
      }
    }
  },
  contribute: {
    defaultTitle: 'إضافة مساهمتك',
    defaultForm: {
      name: {
        label: 'عنوان',
        attribute: 'عنوان',
        placeholder: 'ادخل العنوان'
      },
      description: {
        label: 'الوصف',
        attribute: 'الوصف',
        placeholder: 'أدخل وصفًا (200 كلمة بحد أقصى)'
      },
      location: {
        label: 'الموقع',
        attribute: 'الموقع',
        placeholder: 'أدخل موقعًا'
      },
      photo: {
        label: 'صورة',
        placeholder: 'سحب وإفلات',
        attribute: 'صورة'
      },
      termsAndConditions: {
        legal: 'تُقر وتتعهد بما يلي: (1) تمتلك جميع الحقوق والملكيات الخاصة بالصور التي تتم مشاركتها على هذا الموقع وتمنح Esri والشركات المتعاقدة معها الحق غير الحصري غير المحدود لاستخدام ونسخ وتخزين وإخفاء واستضافة وإعداد الأعمال المشتقة  واستنساخ الصورة التي تتم مشاركتها وعرضها بشكل عام وإعادة توزيعها وإعادة نشرها كجزء من هذه الخدمة.(2) لا تنتهك أو تختلس الصور ومعلومات المواقع الجغرافية المتعلقة التي تتم مشاركتها حقوق الغير سواء الخاصة أو العامة. ويحظر تمامًا مشاركة الصور التي قد تعتبر تشهيرية أو فاحشة أو إباحية أو عنيفة للغاية أو التشجيع على ممارسة أنشطة غير قانونية.'
      }
    }
  },
  review: {
    selection: {
      header: 'مراجعة',
      options: {
        'all': 'كل المساهمات',
        'new': 'المساهمات الجديدة',
        'approved': 'المساهمات المعتمدة',
        'rejected': 'المساهمات المرفوضة'
      }
    },
    selectedShare: {
      header: 'مراجعة'
    }
  },
  fromScratchMessage: {
    saving: 'إطلاق \"منشئ التعهيد\"',
    layerNameInWebmap: 'طبقة التعهيد (لا تقم بإزالتها)'
  },
  help: {
    title: 'تعليمات',
    sections: {
      s1: {
        title: 'مقدمة',
        paragraphs: {
          p1: 'تطبيق \"تعهيد خريطة القصة\" (بيتا) هو تطبيق ArcGIS على الويب صُمّم لتجميع الصور التسميات التوضيحية من أي مستخدم وعرضها على الخريطة، ويتميز بسهولة الاستخدام والتكوين، ويمكن استخدامها في مستعرض الويب على الكمبيوتر المحمول أو كمبيوتر سطح المكتب والجوال والحواسب اللوحية. ويمكن للمساهمين تسجيل الدخول بحسابهم على Facebook أو Google أو ArcGIS أو المشاركة كضيف مجهول.',
          p2: 'لتناول أمثلة على قصص التعهيد التي يُنشئها المنشئون الآخرون، تفضل بزيارة <% galleryLink %>. يمكنك أيضًا متابعتنا عبر Twitter في <% twitterFollowLink %>.',
          p3: 'تُسرّنا آراءك وملاحظاتك! وسواء خطر على بالك سؤال أو تريد طلب ميزة جديدة أو ظهر لك خطأ ما، يرجى زيارة معرض <% geonet %>.'
        },
        links: {
          galleryLink: 'في موقع \"خرائط القصة\" على الويب',
          twitterFollowLink: '@EsriStoryMaps',
          geonet: 'مساحة خرائط القصة في GeoNet'
        }
      },
      s2: {
        title: 'تكوين',
        paragraphs: {
          p1: 'لإنشاء قصة تعهيد مميزة، استخدم خيارات تكوين المنشئ. انقر على <% إعدادات %> في شريط أدوات \"المنشئ\" لتغيير صورة الغلاف والعنوان والشعار وخيارات المشاركة وغير ذلك الكثير.',
          p2: 'لتحديد المنطقة الجغرافية التي سيراها المشاركون عند تحميل القصة، قم بتحريك وتكبير/تصغير الخريطة في الموقع المرغوب، ومن ثمّ انقر على زر <% saveHomeLocation %> بجوار عناصر الانتقال الخاصة بالخريطة.',
          p3: 'يتم <% الحفظ التلقائي %> لتغييرات التكوين بمجرد تنفيذها، ويمكن إلغاء التعديلات على الحقول النصية باستخدام أمر التراجع في المستعرض.',
          p4: 'في هذا الإصدار البيتا، يقتصر استخدام المنشئون على النموذج البسيط المتوفر. في الإصدار المستقبلي، سنقوم بتضمين منشئ نموذج يتيح لك تحرير الأسئلة التي توجهها للمشاركين. وحتى ذلك الحين، يمكنك تعديل تسميات النموذج باتباع <% formEditBlog %>.',
          p5: 'تلميح: للرجوع إلى  <% coverPage %> من الخريطة، انقر على شريط العنوان.'
        },
        links: {
          formEditBlog: 'منشور المدونة'
        },
        bold: {
          settings: 'إعدادات',
          saveHomeLocation: 'حفظ الموقع الرئيسي',
          autosaved: 'تم الحفظ تلقائيًا',
          coverPage: 'صفحة الغلاف'
        }
      },
      s3: {
        title: 'معاينة المساهمات',
        paragraphs: {
          p1: 'يعد عرض المساهمات على الخريطة مباشرةً بعد إرسالها أفضل وسيلة لتشجيع المساهمين ومكافئتهم. ومع ذلك، إذا كنت مهتمًا بمحتوى غير مرغوب فيه أو تريد مراعات المساهمات وتحديد المساهمات المعروضة، يمكنك اختيار مراجعة الإرسالات وقبولها أولاً.',
          p2: 'لمنع ظهور المحتوى على الخريطة قبل مراجعته، انتقل إلى <% إعدادات %> > <% مساهمات %> واختر <% afterReview %>. عند استخدام هذا الخيار، ستكون هذه الصور مرئية لك فقط حتى تقبلها لعرضها على الخريطة.',
          p3: 'لمراجعة مساهمات جديدة، انتقل إلى الخريطة في \"منشئ التعهيد\" وحدد <% newContributions %> في شريط أدوات \"المنشئ\". ومن ثمّ انقر على الخريطة لعرض مساهمة، واختر <% قبول %> أو <% رفض %>.',
          p4: 'يمكنك تغيير المساهمات المعروضة في الخريطة باختيار الكل أو الجديد أو المقبول أو المرفوض في عامل تصفية <% مراجعة %> في شريط أدوات \"المنشئ\"، ويمكن تغيير قرارك بشأن أي مساهمة بالنقر على الخريطة وتحديث حالة القبول الخاصة بها.'
        },
        bold: {
          settings: 'إعدادات',
          contributions: 'المساهمين',
          afterReview: 'عرض المساهمات: بعد المراجعة',
          newContributions: 'مراجعة: المساهمات الجديدة',
          approve: 'قبول',
          reject: 'رفض',
          review: 'مراجعة'
        }
      },
      s4: {
        title: 'تتبع المساهمات',
        paragraphs: {
          p1: 'يمكن أن يتوفر لديك مستخدمين يساهمون في قصة \"التعهيد\" يعرفون أنفسهم بتسجيل الدخول بحساب <% facebook %> أو <% twitter %>أو <% arcgis %>.',
          p2: 'تستخدم خيارات Facebook وTwitter تقنية OAuth لإنشاء حساب ArcGIS عام مُتصل بحساب شبكات التواصل الاجتماعي للمساهم، وهو ما يجعل الأمر سهلاً للمساهمين نظرًا لأنه لا يجب عليهم الاشتراك بحساب جديد للمساهمة في قصتك. وبالطبع إذا كان لدى المساهمين اشتراك أو حساب عام في ArcGIS، يمكنهم تسجيل الدخول.',
          p3: 'يمكنك أيضًا السماح بـ <% guestContributions %> حتى يمكن لأي مستخدم المساهمة دون تسجيل الدخول، وهو ما قد يُشجّع مزيدًا من الأشخاص على المساهمة في القصة. ومع ذلك، لن يتمكن الضيوف من تحرير أو إزالة مساهماتهم (غير متاح في الإصدار البيتا)، ولن يتم تسجيل اسم المستخدم لمساهمات الضيف، وهو ما يجعل من غير الممكن تتبع هذه المساهمات للوصول إلى الشخص نفسه. وإذا كانت هذه الإمكانات ضرورية لك، يجب عليك عدم السماح بأي مساهمات من الضيوف.',
          p4: 'تتوفر كل خيارات تسجيل الدخول أعلاه للمساهمين إلا إذا قمت بتعطيلها، ولا يتوفر تسجيل دخول Facebook وTwitter في البوابة الإلكترونية.'
        },
        bold: {
          facebook: 'Facebook',
          twitter: 'Twitter',
          arcgis: 'ArcGIS',
          guestContributions: 'مساهمات الضيف'
        }
      },
      s5: {
        title: 'الأسئلة المتداولة',
        questions: {
          q1: {
            question: 'كيف يمكن إبداء ملاحظة بشأن هذا التطبيق البيتا؟',
            response: 'لإبداء ملاحظة أو طرح اقتراح أو السماح لنا بمعرفة المشكلات، يرجى مشاركة أفكارك عبر <% geonet %>.'
          },
          q2: {
            question: 'هل تستمر قصة التعهيد المنشأة بالإصدار البيتا من هذا التطبيق في العمل بعد الإصدارات المستقبلية للبرنامج؟',
            response: 'نعم، ستستمر في العمل، ولكن يوجد استثناءين اثنين محتملين: 1) إذا أضفت طبقات إلى خريطة ويب قصة التعهيد البيتا (التي لا يمكن تنفيذها إلا خارج \"المنشئ\")، قد تتوقف تلك الطبقات عن العمل أو قد تتغير رموزها بعد الإصدار النهائي. ولتجنب هذا الموقف، يمكنك تحويل أي طبقات داعمة إلى طبقات المعالم بعد إضافتها إلى الخريطة واستخدام رموز بسيطة. 2) يوجد احتمال لتغيُّر نموذج بيانات طبقة التعهيد. وإذا حدث ذلك، فإننا نعتزم توفير سير عمل أو أداة لتحديث الطبقة إلى نموذج البيانات الجديد.'
          },
          q3: {
            question: 'هل يمكن إضافة طبقات أخرى إلى خريطة قصة التعهيد؟',
            response: 'نعم، يمكنك إضافة طبقات أخرى إلى الخريطة للسياق، لكن يجب عليك أولاً قراءة السؤال السابق للحصول على المعلومات الهامة بشأن تنفيذ ذلك بالإصدار البيتا من تعهيد خريطة القصة. افتح <% خريطة %> القصة، وأضف طبقات و/أو غيّر خريطة الأساس واحفظ التغييرات. سترى في المرة التالية لتحميل القصة الطبقات الجديدة. احرص على عدم حذف أو تعديل طبقة المساهمات في الخريطة وإلا قد تتوقف قصة التعهيد عن العمل كما ينبغي.'
          },
          q4: {
            question: 'أين توجد الصور المخزنة؟',
            response: 'يتم إعادة تشكيل الصور المرسلة بحجم مناسب، كما يتم تخزينها في حساب ArcGIS (كمرفقات خدمة معالم). ويتم أيضًا تخزين الصور التي تُحمّلها في المنشئ لصورة الغلاف والشعار كموارد عنصر في عنصر تطبيق خريطة القصة.'
          },
          q5: {
            question: 'هل يجب أن يتوفر لدى المستخدمين حساب ArcGIS للمساهمة في قصة التعهيد؟',
            response: 'لا، يمكن للمساهمين تسجيل الدخول باستخدام حساب <% facebook %> أو <% google %>، وهو ما يعمل على إنشاء حساب ArcGIS عام مرتبط بحساب شبكات التواصل الاجتماعي للمساهم، ولكن لن يتلقى المساهمين رسائل البريد الإلكتروني من Esri عند تسجيل الدخول بهذه الطريقة. ويمكن للمستخدمين المساهمة كضيوف مجهولين دون تسجيل الدخول إلى أي حساب. ويمكنك التحكم في توافُر طرق تسجيل الدخول للقصة في <% settingsContributions %>.'
          },
          q6: {
            question: 'هل يمكن إنشاء قصة تعهيد باستخدام حساب ArcGIS Online عام؟',
            response: 'لا، ونظرًا لأن تعهيد خريطة القصة يستخدم مرفقات خدمة المعالم لتخزين الصور التي يتم المساهمة بها، لا يتم دعم إلا الحسابات المؤسسية حاليًا.'
          },
          q7: {
            question: 'كيف يمكن أيضًا تخصيص قصة التعهيد؟',
            response: 'إذا لم تلبي خيارات التكوين المتاحة احتياجاتك أو إذا أردت استضافة التطبيق في خادم الويب، يتوفر كود مصدر التطبيق. ولتنزيل الإصدار الأحدث على الإطلاق، تفضل بزيارة <% github %>.'
          },
          q8: {
            question: 'هل تستهلك قصة التعهيد بيانات الاعتماد؟',
            response: 'تستهلك قصة التعهيد المستضافة في ArcGIS Online مقدرًا صغيرًا من بيانات الاعتماد شهريًا نظرًا لتخزين الصور والبيانات في خدمة المعالم، وتستهلك القصة العادية التي تضم مئات الصور أكثر قليلاً من دولار أمريكي واحد شهريًا. تعرف على مزيد من المعلومات بشأن <% agoCredits %>.'
          }
        },
        bold: {
          facebook: 'Facebook',
          google: 'Google',
          settingsContributions: 'إعدادات > مساهمات'
        },
        links: {
          geonet: 'منتدى خرائط القصة في GeoNet',
          map: 'الخريطة',
          agoCredits: 'بيانات اعتماد خدمات ArcGIS Online',
          github: 'صفحة مشروع GitHub'
        }
      }
    }
  },
  settings: {
    title: 'إعدادات',
    buttons: {
      backTo: 'رجوع إلى'
    },
    messages: {
      uploading: 'تحميل'
    },
    panes: {
      header: {
        title: 'رأس الصفحة',
        fields: {
          logoType: {
            label: 'الشعار',
            optionLabels: {
              esri: 'شعار Esri',
              upload: 'تحميل شعار مخصص',
              url: 'شعار مخصص من URL',
              none: 'لا يوجد شعار'
            }
          },
          logoUrl: {
            label: 'عنوان URL لصورة الشعار',
            placeholder: 'https://www.example.org/your_logo.png',
            attribute: 'شعار'
          },
          logoUpload: {
            label: 'تحميل الشعار',
            placeholder: 'سحب وإفلات',
            attribute: 'شعار'
          },
          logoLink: {
            label: 'رابط النقر الخاص بالشعار',
            placeholder: 'https://www.example.com'
          },
          bannerTitle: {
            label: 'عنوان رأس الصفحة',
            placeholder: 'أدخل عنوانًا'
          }
        }
      },
      socialSharing: {
        title: 'اجتماعي',
        extra: {
          tweetLength: 'الطول المقدر',
          tweetLengthWarning: 'قد تكون التغريدة طويلة للغاية. تأكد من اختبارها باستخدام زر Twitter في العنوان.'
        },
        fields: {
          includeSharing: {
            label: 'أزرار التواصل الاجتماعي',
            optionLabels: {
              include: 'عرض أزرار التواصل الاحتماعي'
            }
          },
          twitterText: {
            label: 'تغريد',
            tooltip: 'سيتم اقتراح هذه الرسالة على القُرّاء عند مشاركتهم القصة الخاصة بك على Twitter، ولكن يمكنهم تغييرها. ويتم إضافة رابط قصير إلى القصة في نهاية التغريدة.',
            placeholder: 'أدخل نص التغريدة',
            attribute: 'حقل نص التغريدة'
          },
          twitterRelated: {
            label: 'اقتراحات \"الأشخاص الجديرون بالمتابعة\"',
            tooltip: 'قد يقترح Twitter هذه الحسابات على الأشخاص الذين يغردون قصتك',
            placeholder: 'أدخل حسابات Twitter',
            attribute: 'حقل الحسابات الموصى بها'
          }
        }
      },
      introSplash: {
        title: 'صفحة الغلاف',
        fields: {
          backgroundImage: {
            label: 'تحمل صورة للخلفية',
            placeholder: 'سحب وإفلات',
            attribute: 'صورة الخلفية'
          }
        }
      },
      contribute: {
        title: 'المساهمات',
        fields: {
          allowParticipation: {
            label: 'المساهمات',
            optionLabels: {
              accept: 'قبول المساهمات الجديدة'
            }
          },
          showNewFeatures: {
            label: 'عرض المساهمات',
            tooltip: 'يتحكّم ذلك في وقت ظهور المساهمات الجديدة على الخريطة، ويعرض \"فورًا\" المساهمات على الفور. ويتطلب \"بعد المراجعة\" منك قبول المساهمات الجديدة قبل أن تكون مرئية لأي مستخدم آخر. راجع التعليمات لمزيد من المعلومات عن مراجعة المساهمات.',
            optionLabels: {
              'new': 'فورًا',
              'approved': 'بعد المراجعة'
            }
          },
          loginOptions: {
            label: 'يمكن للمساهمين تسجيل الدخول باستخدام',
            attribute: 'خيار تسجيل الدخول',
            tooltip: 'اختر خيارات تسجيل الدخول التي يمكن للمساهمين استخدامها لتعريف أنفسهم. ويمكن لأي مستخدم المساهمة في القصة بشكل مجهول (دون تسجيل الدخول) إذا تم التأشير على خيار الضيف. راجع التعليمات لمزيد من المعلومات بشأن تتبع المساهمات.',
            optionLabels: {
              arcgis: 'ِArcGIS',
              facebook: 'فيس بوك',
              google: 'Google',
              guest: 'ضيف'
            }
          },
          participateButton: {
            label: 'تسمية زر المشاركة',
            placeholder: 'أدخل تسمية'
          }
        }
      }
    }
  },
  shareApp: {
    title: 'مشاركة القصة',
    sharePermissions: {
      'private': 'خاص',
      'organization': 'المنشأة',
      'public': 'عام'
    },
    socialize: {
      header: 'التواصل الاجتماعي'
    }
  },
  settingsModals: {
    common: {
      advancedOptions: 'خيارات متقدمة',
      welcome: 'مرحبًا بك في'
    },
    itemName: {
      header: 'ما الاسم الذي تريد إطلاقه على قصة التعهيد؟',
      advancedDescription: 'سيتم إنشاء بضعة عناصر لدعم هذه القصة، وإذا أردت إعادة تسمية تلك العناصر أو حفظها في مجلد محدد، يمكنك القيام بذلك أدناه.',
      form: {
        appName: {
          label: 'عنوان',
          placeholder: 'أدخل عنوانًا'
        },
        mapName: {
          label: 'اسم الخريطة',
          placeholder: 'أدخل اسم الخريطة'
        },
        folderSelection: {
          label: 'مجلد',
          rootFolder: 'الصفحة الرئيسية'
        },
        featureServiceName: {
          label: 'اسم الطبقة',
          placeholder: 'أدخل اسم الطبقة'
        }
      }
    },
    layout: {
      header: 'أي التخطيطات الطباعية تريد استخدامها؟',
      headerHint: 'يمكن تغيير التخطيط الطباعي في أي وقت من مربع حوار الإعدادات.',
      preview: 'عرض مثال حي',
      commonAltText: 'معاينة التخطيط.',
      selection: {
        stacked: {
          name: 'تكدس',
          description: 'التبديل بين عروض الخريطة فقط والصور فقط في قصة التعهيد.'
        },
        sidePanel: {
          name: 'اللوحة الجانبية',
          description: 'استكشاف الخريطة والاطلاع على الصور المصغرة في نفس الوقت، ويتم تحديث اللوحة بتحريك الخريطة لعرض الصور فقط في عرض الخريطة الحالي.'
        }
      }
    }
  },
  appDataPlaceholderText: {
    globals: {
      participateShort: 'مشاركة',
      participateLong: 'مشاركة التجربة',
      exploreText: 'استكشاف الخريطة'
    }
  },
  itempageDefaults: {
    webmap: {
      titleAppend: 'خريطة الويب'
    },
    featureService: {
      titleAppend: 'خدمة المعالم'
    }
  },
  messages: {
    arcgisItems: {
      webmapNotOwned: {
        title: 'رسالة من منشئ التعهيد',
        body: 'لقد حاولت إنشاء قصة تعهيد باستخدام خريطة ويب خاصة بشخص ما، ويتم إنشاء نسخة من خريطته في حسابك، وتستخدم قصتك تلك النسخة.',
        confirmBtn: 'موافق'
      }
    }
  },
  errors: {
    actionsBtns: {
      redirectToSecureConnection: 'إعادة التحميل باتصال آمن'
    },
    inlineEditing: {
      heading: 'انتبه:'
    },
    loading: {
      notAuthorizedCreateNew: 'لإنشاء قصة تعهيد، يجب عليك استخدام حساب باشترك ArcGIS يتمتع بامتيازات النشر، وإذا كنت تستخدم حساب اشتراك، اتصل بمسئول ArcGIS لطلب امتيازات إضافية. وإذا كنت تستخدم حساب ArcGIS عام، <a href=\"http://www.arcgis.com/features/plans/pricing.html\" target=\"-blank\">قم بترقية</a> إلى اشتراك أو ابدأ <a href=\"http://www.arcgis.com/features/free-trial.html\" target=\"-blank\">اشتراك فترة تجريبية جديد</a>.',
      notAuthorizedEdit: 'أنت غير مخول لتحرير هذه القصة. إذا لم تكن المالك، تأكد من <a href=\"http://blogs.esri.com/esri/arcgis/2015/07/14/enable-colleagues-to-update-your-maps-and-apps/\" target=\"-blank\">أن المالك قد منحك أذونات التحرير</a>. ويجب أن يتوفر لديك أيضًا الوصول لتحرير العناصر ونشر خدمات معالم مستضافة جديدة في المؤسسة. اتصل بمسئول مؤسسة ArcGIS Online لطلب تلك الامتيازات.',
      crowdsourceLayerNotFound: 'يتعذر العثور على طبقة خريطة التعهيد أو تحميلها بشكل صحيح. تأكد من توفُّر إذن عرض خدمة المعالم لديك.',
      builderNotSSL: 'تتطلب قصة التعهيد استخدام اتصال (http) لضمان تسجيل دخول جمهور المستخدمين والمساهمة بصورهم بشكل آمن. وتأكد من دعم الخادم لاتصال http بنفس عنوان URL. وسيتم توجيه أي مستخدم آخر يحاول الوصول إلى القصة عبر http إلى اتصال آمن إذا أمكن.'
    },
    shareItems: {
      notShared: {
        title: 'انتبه',
        body: 'يتعذر مشاركة بعض العناصر في القصة، وقد ترجع ملكية هذه العناصر لمستخدم آخر أو أنها تتطلب اشتراكًا. كما يتعذر مشاركة العناصر التالية',
        confirmBtn: 'موافق'
      }
    },
    saving: {
      checkInternet: 'يتعذر حفظ القصة، تحقق من اتصال الإنترنت وأعد تحميل الصفحة للمحاولة مجددًا.',
      unknown: 'يتعذر حفظ القصة، أعد تحميل الصفحة للمحاولة مجددًا.'
    },
    scratchCreation: {
      unknown: 'يتعذر إنشاء العناصر المطلوبة للقصة. قم بتحديث الصفحة للمحاولة مجددًا.'
    }
  },
  validations: {
    waitMessage: 'جارِ التحقق...',
    arcgis: {
      naming: {
        arcgisItemName: 'يجب ألا تحتوي <% attribute %> على < أو >.',
        arcgisServiceNameFormat: 'يجب أن تحتوي <% attribute %> على أحرف وأرقام وتسطير سفلي، ولا يجوز أن تبدأ برقم.'
      },
      portal: {
        unableToCheckName: 'يتعذر فحص توافر الاسم. يرجى إعادة المحاولة.',
        nameNotString: 'يجب أن يكون الاسم نصًا عاديًا.',
        nameNotAvailableFS: 'الاسم الذي اخترته للطبقة غير متاح. يرجى اختيار اسم آخر.'
      }
    }
  }
});
