const Video = require('../models/Video');
module.exports.GetVideos= async function (req, res) {

    try {
        const videos = await Video.find();
    
        res.json(videos);
      } catch (error) {
        console.error('Failed to fetch videos:', error);
        res.status(500).json({ error: 'Failed to fetch videos' });
      }
  };

  module.exports.PutVideos= async function (req, res) {

    try {
        const videos = [
          {
            title: 'Geography Class 6',
            url: 'https://www.youtube.com/watch?v=p1cM7T0fvhQ&pp=ygUbY2xhc3MgNiBlZHVjYXRpb25hbCB2aWRlb3Mg',
          },
          {
            title: 'Science Class 6',
            url: 'https://www.youtube.com/watch?v=E490qP5TtQg&pp=ygUbY2xhc3MgNiBlZHVjYXRpb25hbCB2aWRlb3Mg',
          },
          {
            title: 'Science Class 6',
            url: 'https://www.youtube.com/watch?v=YTeraMml18c&pp=ygUbY2xhc3MgNiBlZHVjYXRpb25hbCB2aWRlb3Mg',
          },
          {
            title: 'Maths Class 6',
            url: 'https://www.youtube.com/watch?v=j9jm3wFMBQs&pp=ygUgY2xhc3MgNiBlZHVjYXRpb25hbCB2aWRlb3MgbWF0aHM%3D',
          },
          {
            title: 'Maths Class 6',
            url: 'https://www.youtube.com/watch?v=mAnfRhl2ISc&pp=ygUgY2xhc3MgNiBlZHVjYXRpb25hbCB2aWRlb3MgbWF0aHM%3D',
          },
        ];
    
        // Save the videos to the database
        await Video.insertMany(videos);
    
        res.json({ message: 'Videos uploaded successfully.' });
      } catch (error) {
        console.error('Failed to upload videos:', error);
        res.status(500).json({ error: 'Failed to upload videos' });
      }

  }
