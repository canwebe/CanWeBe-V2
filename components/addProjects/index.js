import { useState } from 'react'
import styles from '../../styles/Admin.module.css'

export default function AddProject() {
  const [data,setData]=useState({
   name:'',
   btn:'',
   info:'',
   
  })


  const [error, setError] = useState('')

  const handleSubmit = () => {}
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
      <h1 className='pageHeader'>Create Post.</h1>
      <form className={styles.createWrapper} onSubmit={handleSubmit}>
        <input
          className={styles.inputtext}
          onChange={handleChange}
          name='title'
          placeholder='Enter The Title'
          required
          type='text'
          value={title}
          maxLength={100}
        />
        <div className={styles.inputwrapper}>
          <input
            className={styles.inputtext}
            onChange={(e) => setPhoto(e.target.files[0])}
            accept='image/*'
            type='file'
          />
          <select
            className={styles.inputtext}
            name='name'
            value={name}
            required
            onChange={handleChange}
          >
            <option value='Golam Rabbani'>Golam Rabbani</option>
            <option value='Anish Tharu'>Anish Tharu</option>
            <option value='Ganesh Kumar'>Ganesh Kumar</option>
            <option value='Mohd Zahid'>Mohd Zahid</option>
          </select>
        </div>
        <input
          className={styles.inputtext}
          onChange={handleChange}
          name='tags'
          placeholder='eg: react,javascript,html'
          required
          type='text'
          value={tags}
        />

        <textarea
          onChange={handleChange}
          name='shortinfo'
          placeholder='Type short info'
          required
          rows={2}
          value={shortinfo}
          maxLength={150}
          className={styles.shortinfo}
        />

        <textarea
          className={styles.markdownArea}
          name='content'
          onChange={handleChange}
          required
          value={content}
          rows='10'
          placeholder='Attention this is markdown content'
        />

        <button
          className={`${styles.btn} full`}
          type='submit'
          disabled={loading}
        >
          {loading ? 'Adding' : 'Add Post'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </>
  )
}
