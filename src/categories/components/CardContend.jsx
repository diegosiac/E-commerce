import { Card, CardContent as CardContainer, CardMedia, Typography } from '@mui/material'

export const CardContend = ({ title, description, classImg, urlImg, ...props }) => {
  return (
    <Card {...props}>
      {
        urlImg &&
          <CardMedia
            component='img'
            className={classImg}
            image={urlImg}
            alt={title}
          />
      }
      <CardContainer className='flex flex-col justify-center'>
        <Typography gutterBottom variant='h4' component='h5'>
          {title}
        </Typography>
        <Typography component='p'>
          {description}
        </Typography>
      </CardContainer>
    </Card>
  )
}
