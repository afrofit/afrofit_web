import { Typography } from '@mui/material'
import { StyledDialog } from './StyledDialog'
import VerifiedIcon from '@mui/icons-material/Verified'

interface Props {
  open: boolean
  onClose: () => void
  closeButtonLabel?: string
  title?: string
  message?: string
}

export const SuccessDialog: React.FC<Props> = ({
  open,
  onClose,
  title = 'Your request Done Successfully',
  message = 'request Done Successfully',
  closeButtonLabel = 'Ok',
}) => {
  setTimeout(() => {
    onClose()
  }, 1000)

  return (
    <StyledDialog
      open={open}
      headingTitleIcon={<VerifiedIcon sx={{ color: 'green' }} />}
      headingTitle={
        <Typography sx={{ fontSize: 22, color: 'green' }}>{title}</Typography>
      }
      onClose={onClose}
    >
      <Typography>{message}</Typography>
    </StyledDialog>
  )
}
