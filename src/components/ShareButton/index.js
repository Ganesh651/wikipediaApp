const ShareButton = props => {
      const {shareUrl} = props

      const handleShareClick = async () => {
            await navigator.share({
                        url: shareUrl
                  })
      }

      return <button type="button" className="btn btn-primary" onClick={handleShareClick}>Share</button>
}

export default ShareButton