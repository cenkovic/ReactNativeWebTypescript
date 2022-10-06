import React from 'react'
import { ButtonGroup } from '@app/components/ButtonGroup/ButtonGroup'
import { useTranslation } from 'react-i18next'
import { Text } from '@app/styles/Text/Text.styled'
import { Flag } from './LanguagePicker.styled'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '@app/redux/slices/appSlice'
import { Language } from '@app/intl/i18next'

export const LanguagePicker = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  return (
    <ButtonGroup
      label={t('Change Language')}
      onChange={lang => {
        dispatch(changeLanguage(lang))
      }}
      value={i18n.language as Language}
      options={[
        {
          text: (
            <>
              <Flag source={require('@app/assets/countries/gb.png')} />
              <Text>{t('English')}</Text>
            </>
          ),
          value: 'en'
        },
        {
          text: (
            <>
              <Flag source={require('@app/assets/countries/rs.png')} />
              <Text>{t('Serbian')}</Text>
            </>
          ),
          value: 'rs'
        }
      ]}
    />
  )
}
